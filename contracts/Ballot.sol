pragma solidity ^0.4.16;

/// @title Voting with delegation.
contract Ballot {


    struct Voter {
        bool voted;  // if true, that person already voted
        bool revoked;
        bytes32 vote;   // index of the voted proposal

        address publicAdress;
    }

    struct Proposal {
        bytes32 name;   // short name (up to 32 bytes)
        uint voteCount; // number of accumulated votes
    }

    address public chairperson;
    Proposal[] public proposals;
    Voter[] public voters;

    bool voteStarted;
    bool voteEnded;

    function setProposalNames(bytes32[] proposalNames) public
    {
         chairperson = msg.sender;
        for (uint i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount: 0
            }));
        }
    }

    function getProposalNames() public view returns (uint )
                {        return proposals.length;

                }


         function getHaveRightToVote() public view returns (uint len_)
                {        uint i = voters.length;
                       len_ =  i;
                }


    function setHaveRightToVote(address[] haveRightToVote) public
    {
            require(
            (msg.sender == chairperson)
        );
        for (uint j = 0; j < haveRightToVote.length; j++) {
            voters.push(Voter({
                voted: false,
                revoked: false,
                publicAdress: haveRightToVote[j],
                vote: 0
            }));
        }

    voteStarted = false;
    voteEnded = false;
    }




    function RevokeRightToVote(address[] haveRightToVote) public {
        require(
            (msg.sender == chairperson)
        );

        for (uint j = 0; j < haveRightToVote.length; j++) {
             for (uint k = 0; k < voters.length; k++)
             {
                if (voters[k].publicAdress == haveRightToVote[j])
                {
                             for (uint i = 0; i < proposals.length; i++) {
           if (voters[k].vote == proposals[i].name && !voters[k].revoked)
           {
               voters[k].revoked= true;
           proposals[i].voteCount -= 1;
           }
        }
                }

             }

        }


    }

   function vote(bytes32 tovote) public
    {
        require(
            (voteStarted && !voteEnded)
        );

        address voteradress = msg.sender;
        uint voterRank = 500;
         for (uint j = 0; j < voters.length; j++) {
            if (voters[j].publicAdress == voteradress)
            {
                voterRank = j;
            }
        }

        if (voters[voterRank].voted == false)
        {
            voters[voterRank].voted = true;
         voters[voterRank].vote = tovote;

         for (uint t = 0; t < proposals.length; t++) {
            if (proposals[t].name == tovote)
            {
               proposals[t].voteCount += 1;
            }
        }
        }


    }


    function winnerName() public view
            returns (bytes32 winnerName_)
    {
        require(
            (voteEnded)
        );

        bytes32 name ;
        uint mostCount = 0;
        for (uint t = 0; t < proposals.length; t++) {
            if (proposals[t].voteCount > mostCount)
            {
                mostCount = proposals[t].voteCount;
               name = proposals[t].name;
            }
        }
        winnerName_ = name;
    }


    function startVote() public
    {
        require(
            (msg.sender == chairperson)
        );

        if (voteStarted == false)
        {
            voteStarted = true;
        }
    }

    function EndVote() public
    {
        require(
            (msg.sender == chairperson)
        );

        if (voteStarted == true && voteEnded == false)
        {
            voteEnded = true;
        }
    }

}
