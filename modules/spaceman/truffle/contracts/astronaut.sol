pragma solidity ^0.4.13;

contract AstronautContract {
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

  function AstronautContract(address _arbiter, address _shipper) public {
    state = State.DEPLOYED;
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
    Withdraw(this.balance);
    shipper.transfer(this.balance);
  }
}
