/**
 * The API contract that most visitors should extend.
 *
 * @interface
 */
class CrcModelListVisitor {

    /**
     * Perform operations on a `CrcModelList`.
     *
     * @param {CrcModelList} crcModelList An array of `CrcModels`.
     *
     * @returns {void}
     */
    visit() {}
}

module.exports = CrcModelListVisitor;
