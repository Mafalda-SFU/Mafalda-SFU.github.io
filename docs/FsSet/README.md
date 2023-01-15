# FsSet

Filesystem-backed implementation of JavaScript `Set` class

`FsSet` implements JavasScript
[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
class API, storing values in a file. This is specially useful to exchange small
snippets of data between different processes, like a set of processes PIDs.

`Set` API is synchronous, so maybe there could be some perfomance issues with
high load, but it has been developed tried to remove any extra overload, keeping
the file descriptors opened to write directly to the filesystem cache. Another
limitation of current implementation is that it only support as values strings
without `null`s (currently being use to separate values inside the file).

Regarding concurrency, usage of sync APIs gives protection inside the process
itself, while access by multiple processes is protected by module
[proper-filelock](https://www.npmjs.com/package/proper-lockfile) and the fact
that implementation is stateless, reading the file data from the filesystem
cache before doing any operation.

## API

In addition to basic Set API, `FsSet` has some additional methods:

### constructor(path, options)

- *path*: path to the file where the set will be stored
- *options*
  - *bufferSize*: size of the buffer used to read the file. Default is 16KB
    (Node.js default)
  - *cleanAfterRead*: if provided, function to remove values read from the file.
    Useful when it's possible there's stale data in the file. Default is `null`
    (no cleanup)
  - *lockfile*: options to config the `proper-lockfile` module. By default, it
    uses `proper-lockfile`'s default options

### close()

Closes the file descriptor and releases the lock. No more operations can be done
in the `FsSet` instance after closing it.

### async lock(func, ...rest)

Allow to group multiple operations in a single lock. It's reentrant, so it's
possible to call it multiple times, and lock will be released only when all the
calls to `lock` are done.

- *func*: function to execute inside the lock
- *rest*: arguments to pass to the function
