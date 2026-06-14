export class Result {
  constructor(name, ids) {
    this.name = name;
    this.ids = ids;
    this.items = [];
    this.tertiary = [];
    this.charms = [];
  }
}

export class DisplayItem {
  constructor(id, name, minAmount, maxAmount, weight, totalWeight, npcId = null) {
    this.id = id;
    this.name = name;
    this.minAmount = minAmount;
    this.maxAmount = maxAmount;
    this.weight = weight;
    this.totalWeight = totalWeight;
    this.npcId = npcId;
  }

  get rarity() {
    if (this.weight === -1) return "Always";
    const percent = (this.weight / this.totalWeight) * 100;
    return "1/" + (+parseFloat(100 / percent).toFixed(2).replace(/(\.0+|0+)$/, ''));
  }

  get percent() {
    if (this.weight === -1) return 100;
    return parseFloat((this.weight / this.totalWeight) * 100).toFixed(2);
  }

  get amountDisplay() {
    return (this.minAmount != this.maxAmount) ? this.minAmount + "-" + this.maxAmount : this.minAmount;
  }

  get perKillAverage() {
    const avg = (this.minAmount + this.maxAmount) / 2;
    if (this.weight === -1) return avg.toFixed(2);
    const probability = this.weight / this.totalWeight;
    return (avg * probability).toFixed(2);
  }

  get sortValue() {
    if (this.weight === -1) return parseFloat(this.perKillAverage);
    return parseFloat(this.perKillAverage);
  }
}

export class NPCObject {
  constructor(ids, name) {
    this.ids = ids;
    this.name = name;
    this.default = [];
    this.main = [];
    this.tertiary = [];
    this.charm = [];
    this.totalWeight = 0;
    this.totalTertiaryWeight = 0;
    this.totalCharmWeight = 0;
  }
}
