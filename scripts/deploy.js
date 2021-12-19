const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    
    const gameContract = await gameContractFactory.deploy(
        ["Peter Tobey", "Peter Tom", "Peter Andrew"],       // Names
        ["https://i.imgur.com/iQDynmK.jpeg", // Images
        "https://i.imgur.com/LcY2QRr.jpeg", 
        "https://i.imgur.com/6eZkeVK.jpeg"],
        [200, 100, 150],                    // HP values
        [50, 50, 25],                       // Attack damage values
        "Alfred Doctor Octopus", // Boss name
        "https://i.imgur.com/asDTKxb.png", // Boss image
        10000, // Boss hp
        50 // Boss attack damage                       
    );
  
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();