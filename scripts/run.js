const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Peter Tobey", "Peter Tom", "Peter Andrew"],       // Names
        ["https://i.imgur.com/iQDynmK.jpeg", // Images
        "https://i.imgur.com/6eZkeVK.jpeg", 
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

    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Minted NFT #1");
    
    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);

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