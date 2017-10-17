/**
 * The API contract that most visitors should extend.
 *
 * @interface
 */
class CrcModelListVisitor {

    /**
     * Perform operations on a `CrcModelList`.
     *
     * @abstract
     * @param {CrcModelList} crcModelList An array of `CrcModels`.
     *
     * @returns {void}
     */
    /*eslint no-unused-vars: "off"*/
    /* istanbul ignore next: this is an interface method */
    visit(crcModelList) {
        throw new Error('Not implemented.');
    }
}

module.exports = CrcModelListVisitor;
