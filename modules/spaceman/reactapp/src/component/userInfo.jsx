import React from 'react';

const UserInfo = ({ globalProps }) => {
  const state = globalProps.state;
  const stageInfo = {
    "STAGE-0": {
      name: "Astronaut",
      address: state.astronautAddress,
      prompt: "Input all of the parties and deploy your smart contract."
    },
    "STAGE-1": {
      name: "Astronaut",
      address: state.astronautAddress,
      prompt: "Send the astronaut's payment to the smart contract."
    },
    "STAGE-2": {
      name: "Parts Seller",
      address: state.shipperAddress,
      prompt: "Ship the flux capacitor to the astronaut so they can fix their ship."
    },
    "STAGE-3": {
      name: "Arbiter",
      address: state.arbiterAddress,
      prompt: "Confirm that the astronaut received the flux capacitor."
    },
    "STAGE-4": {
      name: "Parts Seller",
      address: state.shipperAddress,
      prompt: "Withdraw the seller's payment from the smart contract."
    },
    "COMPLETE": {
      name: "Astronaut",
      address: state.astronautAddress,
      prompt: "CONGRATULATIONS! Due to the power of your decentralized app, the astronaut can return to earth!"
    }
  };

  const currentParty = stageInfo[state.currentStage]['name'] ?
    stageInfo[state.currentStage]['name'] : " - - - ";
  const currentAddress = stageInfo[state.currentStage]['address'] ?
    stageInfo[state.currentStage]['address'] : " - - - ";
  const currentPrompt = stageInfo[state.currentStage]['prompt'];
  const contractAddress = typeof state.contract.address !== 'undefined'?
    state.contract.address : " - - - ";

  return (
    <div className="user-info-wrapper">
      <div className="stage user-info">
        <div className="app-state">
          <h3>Active Party</h3>
          <p>{`${currentParty}`}</p>
          <h3>Address</h3>
          <p>{`${currentAddress}`}</p>
          <h3>Contract Address</h3>
          <p>{`${contractAddress}`}</p>
        </div>
        <div className="stage-prompt">
          <p>{currentPrompt}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
