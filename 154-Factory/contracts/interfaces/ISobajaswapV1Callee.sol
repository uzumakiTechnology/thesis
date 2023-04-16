pragma solidity >=0.5.0;

interface ISobajaswapV1Callee {
    function sobajaswapV1Call(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
