pragma solidity >=0.4.21 <0.6.0;

contract Edwlqui {

    mapping (address => string[]) public edwlquiToPublisher;

    function savePaper(string memory _newPaper) public {
        edwlquiToPublisher[msg.sender].push(_newPaper);
    }

    // To get a specific paper in the edwlqui, you first need to ask which one you want.
    // Return the edwlqui size.
    function getEdwlquiSize(address _edwlquiPublisherTarget) public view returns(uint16) {
        return uint16(edwlquiToPublisher[_edwlquiPublisherTarget].length);
    }

    function getPaperFromEdwlqui(address _edwlquiPublisherTarget, uint16 _paperId) public view returns(string memory) {
        return edwlquiToPublisher[_edwlquiPublisherTarget][_paperId];
    }
}