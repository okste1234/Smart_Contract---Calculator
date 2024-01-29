// test/calculator-test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Calculator contract", function () {
    let Calculator;
    let calculator;

    beforeEach(async () => {
        Calculator = await ethers.getContractFactory("Calculator");
        calculator = await Calculator.deploy();
        // await calculator.deployed();
    });

    it("Should add two numbers correctly", async function () {
        const result = await calculator.addNum(3, 5);
        expect(result).to.equal(8);

        const result2 = await calculator.addNum(-2, 7);
        expect(result2).to.equal(5);
    });

    // Add more test cases as needed
});