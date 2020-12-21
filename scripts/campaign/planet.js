Events.on(ClientLoadEvent, () => {

    const vor = new Planet("vor", Planets.sun, 1, 0.7);
    vor.generator = new TantrosPlanetGenerator();
    vor.mesh = new HexMesh(vor, 5);
    vor.orbitRadius = 3.8;
    vor.orbitTime = 1.5 * 10;
    vor.rotateTime = 30;
    vor.bloom = true;
    vor.accessible = true;
    vor.startSector = 1;
    vor.alwaysUnlocked = true;
    vor.localizedName = "Vor";
});
