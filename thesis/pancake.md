Token Swap

Native token : Every blockchain has its own native coin used to reward miners and validators adding blocks to the blockchain and for payment. 
In this case, native token of PancakeSwap is BEP20
Token swaps on PancakeSwap are simple way to trade one BEP20 token for another via automated liquidity pools and also with market
makers when trading ERC-20 tokens

When you make a swap(trade) on the exchange, you will pay 0.25% trading fee which broken down as :
0.17% - Sent to Liquidity Pools in the form of a fee reward for liquidity providers
0.0225% - Sent to PS treasury
0.0575% - Sent towards CAKE buyback and burn.

# Smart Router
is a routing algorithm that links the AMM and stableswap to provide better liquidity and pricing
It uses a smart order routing algorithm that executes trades across multiple pools to find the best price for traders.

Use StableSwap for better fees

# Liquidity Pools
when you add your token to a liquidity pool, you will receive liquidity provider (LP) tokens and share the fees

example: you deposited CAKE and BNB into Liquidity Pool, you'd receive CAKE-BNB LP tokens/
The number of LP Tokens you receive represent you portion of CAKE-BNB liquidity pool
You can redeem your funds at any time by removing your liquidity


* Liquidity Providers earn trading fees
gives you a reward in form of trading fees when people use your liquidity pool
- whenever someone trades on PancakeSwap, trader pay 0.25% fee, 0.17% is added to the Liquidity Pool of the swap pair they traded on

Example : 

10 LP tokens represent 10 Cake and 10 BNB
1 LP = 1 CAKE + 1 BNB
someone trades 10 CAKE for 10 BNB
somneone else trades 10 BNB for 10 CAKE
CAKE/BNB liquidity pool now has 10.017 CAKE and 10.017 BNB
Each LP token is now worth 1.00017 CAKE and 1.00017 BNB

* Adding Liquidity
to provide liquidity, you need to commit an amount of any token pair you like, lowest value (in USD) of two tokens will be the limit to 
the liquidity you can provide

task : 
    + masterchef: 
    + transfer the ownership token to the masterchef
    + swap function => {
        - Factory smart contract
        - router smart contract
        - pair smart contract
    }
    + add liquidity/ remove liquidity
    + staking
    + farming
    + lottery => chainlink vrf for random number
    + nft marketplace => nft collectible, ...





