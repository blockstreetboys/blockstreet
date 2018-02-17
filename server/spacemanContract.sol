pragma solidity ^0.4.19;

contract SpacemanContract {
  address public astronaut;
  address public shipper;
  address public arbiter;

  enum State {
    DEPLOYED,
    PAID,
    RECEIVED,
    WITHDRAWN
  }
  State public state;

  event Paid(uint256 value);
  event Received(uint256 time);
  event Withdraw(uint256 value);

  function SpacemanContract(address _arbiter, address _shipper) public {
    arbiter = _arbiter;
    shipper = _shipper;
    astronaut = msg.sender;
  }

  function pay() public payable {
    require(msg.sender == astronaut);
    state = State.PAID;
    Paid(msg.value);
  }

  function receive() public {
    require(msg.sender == arbiter);
    require(state == State.PAID);
    state = State.RECEIVED;
    Received(now);
  }

  function withdraw() public {
    require(msg.sender == shipper);
    require(state == State.RECEIVED);
    state = State.WITHDRAWN;
    shipper.transfer(this.balance);
    Withdraw(this.balance);
  }
}
