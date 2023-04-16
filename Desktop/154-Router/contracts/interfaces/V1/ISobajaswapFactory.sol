pragma solidity >=0.5.0;

interface ISobajaswapFactory {
    function getExchange(address) external view returns (address);
}
