'use strict';

/**
 * To use it, you just need to import it:
 *
 * ```js
 * var Process = require('findhit-process');
 * ```
 *
 *
 * @object pfs (promised File System)
 */
module.exports = (function () {
	var fs = require('fs'),
		Util = require('findhit-util'),
		Promise = require('findhit-promise');

	var pfs = {};

	// Using `Promise.ify` to bind `fs` functions

	pfs.rename = Promise.ify({
		function: fs.rename,
		parameters: [ 'oldPath', 'newPath', 'callback' ],
		context: fs,
	});

	pfs.ftruncate = Promise.ify({
		function: fs.ftruncate,
		parameters: [ 'fd', 'len', 'callback' ],
		context: fs,
	});

	pfs.truncate = Promise.ify({
		function: fs.truncate,
		parameters: [ 'path', 'len', 'callback' ],
		context: fs,
	});

	pfs.chown = Promise.ify({
		function: fs.chown,
		parameters: [ 'path', 'uid', 'gid', 'callback' ],
		context: fs,
	});

	pfs.fchown = Promise.ify({
		function: fs.fchown,
		parameters: [ 'fd', 'uid', 'gid', 'callback' ],
		context: fs,
	});

	pfs.lchown = Promise.ify({
		function: fs.lchown,
		parameters: [ 'path', 'uid', 'gid', 'callback' ],
		context: fs,
	});

	pfs.chmod = Promise.ify({
		function: fs.chmod,
		parameters: [ 'path', 'mode', 'callback' ],
		context: fs,
	});

	pfs.fchmod = Promise.ify({
		function: fs.fchmod,
		parameters: [ 'fd', 'mode', 'callback' ],
		context: fs,
	});

	pfs.lchmod = Promise.ify({
		function: fs.lchmod,
		parameters: [ 'path', 'mode', 'callback' ],
		context: fs,
	});

	pfs.stat = Promise.ify({
		function: fs.stat,
		parameters: [ 'path', 'callback' ],
		context: fs,
	});

	pfs.lstat = Promise.ify({
		function: fs.lstat,
		parameters: [ 'path', 'callback' ],
		context: fs,
	});

	pfs.fstat = Promise.ify({
		function: fs.fstat,
		parameters: [ 'fd', 'callback' ],
		context: fs,
	});

	pfs.link = Promise.ify({
		function: fs.link,
		parameters: [ 'srcpath', 'dstpath', 'callback' ],
		context: fs,
	});

	pfs.symlink = Promise.ify({
		function: fs.symlink,
		parameters: [ 'srcpath', 'dstpath', '[type]', 'callback' ],
		context: fs,
	});

	pfs.readlink = Promise.ify({
		function: fs.readlink,
		parameters: [ 'path', 'callback' ],
		context: fs,
	});

	pfs.realpath = Promise.ify({
		function: fs.realpath,
		parameters: [ 'path', '[cache]', 'callback' ],
		context: fs,
	});

	pfs.unlink = Promise.ify({
		function: fs.unlink,
		parameters: [ 'path', 'callback' ],
		context: fs,
	});

	pfs.rmdir = Promise.ify({
		function: fs.rmdir,
		parameters: [ 'path', 'callback' ],
		context: fs,
	});

	pfs.mkdir = Promise.ify({
		function: fs.mkdir,
		parameters: [ 'path', '[mode]', 'callback' ],
		context: fs,
	});

	pfs.readdir = Promise.ify({
		function: fs.readdir,
		parameters: [ 'path', 'callback' ],
		context: fs,
	});

	pfs.close = Promise.ify({
		function: fs.close,
		parameters: [ 'fd', 'callback' ],
		context: fs,
	});

	pfs.open = Promise.ify({
		function: fs.open,
		parameters: [ 'path', 'flags', '[mode]', 'callback' ],
		context: fs,
	});

	pfs.utimes = Promise.ify({
		function: fs.utimes,
		parameters: [ 'path', 'atime', 'mtime', 'callback' ],
		context: fs,
	});

	pfs.futimes = Promise.ify({
		function: fs.futimes,
		parameters: [ 'fd', 'atime', 'mtime', 'callback' ],
		context: fs,
	});

	pfs.fsync = Promise.ify({
		function: fs.fsync,
		parameters: [ 'fd', 'callback' ],
		context: fs,
	});

	pfs.write = Promise.ify({
		function: fs.write,
		parameters: [ 'fd', 'buffer', 'offset', 'length', 'position', 'callback' ],
		context: fs,
	});

	pfs.read = Promise.ify({
		function: fs.read,
		parameters: [ 'fd', 'buffer', 'offset', 'length', 'position', 'callback' ],
		context: fs,
	});

	pfs.readFile = Promise.ify({
		function: fs.readFile,
		parameters: [ 'filename', '[options]', 'callback' ],
		context: fs,
	});

	pfs.writeFile = Promise.ify({
		function: fs.writeFile,
		parameters: [ 'filename', 'data', '[options]', 'callback' ],
		context: fs,
	});

	pfs.appendFile = Promise.ify({
		function: fs.appendFile,
		parameters: [ 'filename', 'data', '[options]', 'callback' ],
		context: fs,
	});

	pfs.exists = Promise.ify({
		function: fs.exists,
		parameters: [ 'path', 'callback' ],
		context: fs,
	});

	// fs.watchFile(filename, [options], listener)
	// fs.unwatchFile(filename, [listener])
	// fs.watch(filename, [options], [listener])
	// fs.createReadStream(path, [options])
	// fs.createWriteStream(path, [options])
 

	return pfs;
})();