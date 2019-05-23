

# Hackathon PoC - 2019

The main goal of this exercise is to "reproduce" a Leboncoin built on the blockchain, where it secures the money transfer.

## Flow example

The user flow could be similar to:

- Arthur posts a product to sell (indicating price in Eth)
- Jimmy is interested in buying the product
  - He places money on hold for that product
- Arthur sees that Jimmy wants to buy the item
- Once Jimmy receives it, he unlocks the money, that'll go directly to Arthur's wallet

Every action containing money (Ether) should be executed on the blockchain.

### Optional steps

You are free to provide a backend who will link public Ethereum addresses to an account (mail, profile picture or whatever) so that the platform is a bit more user friendly.
For example, the user can register / log in using his public key into the platform

## Subject

- Develop a smart contract in [Solidity](https://solidity.readthedocs.io/en/v0.5.7/) that can rule the whole concept on its own
  - For example, it can have functions like `sell_item`, `buy_item` and `accept_item_reception`
- Create a platform using [ReactJS](https://reactjs.org/) that can propose to sell an article and list the available ones.
- The interface will interact with the blockchain
  -  You can use [Web3JS](https://github.com/ethereum/web3.js/) and [Metamask](https://metamask.io/)

## Documentation

You might have to take a look at:

- [Global Ethereum explanation](https://medium.com/@ConsenSys/a-101-noob-intro-to-programming-smart-contracts-on-ethereum-695d15c1dab4)
- [Simple Smart Contract](https://solidity.readthedocs.io/en/v0.5.7/introduction-to-smart-contracts.html)

## Resources

- To interact with the blockchain, you will need a _wallet provider_ such as [Metamask](https://metamask.io/)
  - You can easily create a wallet through the extension
- The application will run on a testnet called Ropsten, here's a provider you can use to connect to it `ropsten.infura.io/v3/b1c4b69a70764816b8322247bc5b5939`
- Come see the SkillZ team to get free Ropsten Ethereum onto your account

_If you have any question, do not hesitate to come see us_

> SkillZ 2019