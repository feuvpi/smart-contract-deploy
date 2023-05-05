// Define an asynchronous function called main
async function main() {
    // Call the ethers.js function getContractFactory to retrieve the factory for the "greet" contract
    const greetContractFactory = await ethers.getContractFactory("greet")
    // Deploy the "greet" contract using the greetContractFactory and assign the resulting contract instance to the greetContract variable
    const greetContract = await greetContractFactory.deploy()
    // Wait for the contract deployment to complete
    await greetContract.deployed()
    // Log the address of the deployed contract to the console
    console.log("Contract deployed to:", greetContract.address)
}

// Call the main function and handle any errors that may occur
main().catch((e) => console.log(e))