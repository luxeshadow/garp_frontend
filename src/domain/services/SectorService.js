
import Sector from '../models/Sector';

class SectorService {
    constructor() {
        this.sectors = [];
    }

    createSector(name) {
        let sector = new Sector(name,description);
        this.sectors.push(sector);
        return sector;
    }
}

export default new SectorService();
