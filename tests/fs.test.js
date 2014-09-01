var pfs = require('../index'),
	Util = require('findhit-util'),

	sinon = require('sinon'),
	chai = require('chai'),
	expect = chai.expect;

describe( "Promised File System", function () {

	describe.only( ".rename", function () {

		it( "rename LICENSE", function ( done ) {

			pfs.exists( '../OPENSOURCE' )
				.then(function ( file_exists ) {

					expect( file_exists ).to.be.ok;

					return pfs.rename( '../LICENSE', '../OPENSOURCE' );

				})
				.then(function () {

					return exists( '../OPENSOURCE' );

				})
				.then(function ( file_exists ) {

					expect( file_exists ).to.be.ok;

					return pfs.rename( '../OPENSOURCE', '../LICENSE' );

				})
				.then( done )
				.catch( done );

		});

	});

});