export default {
  template: `
    <div class="item-data">
      <div v-for="item in searchResults" :key="item.id" class="item-entry">
        <div class="item-header">
          <img :src="getItemIconURL(item.id)" :alt="item.name" class="item-image" />
          <div class="item-info">
            <h2 class="item-name">{{ item.name }}</h2>
            <div class="item-id">ID: {{ item.id }}</div>
          </div>
        </div>
        
        <div v-if="item.examine" class="item-description">
          <p><strong>Examine:</strong> {{ item.examine }}</p>
        </div>
        
        <div class="item-details">
          <div v-if="item.shop_price" class="detail-row">
            <span class="detail-label">Shop Price:</span>
            <span class="detail-value">{{ item.shop_price }} gp</span>
          </div>
          <div v-if="item.grand_exchange_price" class="detail-row">
            <span class="detail-label">GE Price:</span>
            <span class="detail-value">{{ item.grand_exchange_price }} gp</span>
          </div>
          <div v-if="item.tradeable" class="detail-row">
            <span class="detail-label">Tradeable:</span>
            <span class="detail-value">{{ item.tradeable === 'true' ? 'Yes' : 'No' }}</span>
          </div>
          <div v-if="item.weight" class="detail-row">
            <span class="detail-label">Weight:</span>
            <span class="detail-value">{{ item.weight }} kg</span>
          </div>
          <div v-if="item.equipment_slot" class="detail-row">
            <span class="detail-label">Equipment Slot:</span>
            <span class="detail-value">{{ getEquipmentSlotName(item.equipment_slot) }}</span>
          </div>
          <div v-if="item.ge_buy_limit" class="detail-row">
            <span class="detail-label">GE Buy Limit:</span>
            <span class="detail-value">{{ item.ge_buy_limit }}</span>
          </div>
          <div v-if="item.requirements" class="detail-row">
            <span class="detail-label">Requirements:</span>
            <span class="detail-value">{{ formatRequirements(item.requirements) }}</span>
          </div>
        </div>
        
        <div v-if="item.bonuses" class="item-bonuses">
          <h3>Equipment Bonuses</h3>
          <table class="bonuses-table">
            <thead>
              <tr>
                <th>Stat</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, index) in parseBonuses(item.bonuses)" :key="index">
                <td>{{ getStatName(index) }}</td>
                <td>{{ value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  props: {
    searchResults: {
      type: Array,
      default: () => []
    },
    iconURL: {
      type: Function,
      required: true
    }
  },
  methods: {
    getItemIconURL(id) {
      switch (parseInt(id)) {
        case 0: return "./img/items/nothing.png";
        case 1: return "./img/items/2677.png"; //Clue Scroll (easy)
        case 5733: return "./img/items/2801.png"; //Clue Scroll (medium)
        case 12070: return "./img/items/2722.png"; //Clue Scroll (hard)
        default: return "./img/items/" + id + ".png"
      }
    },
    parseBonuses(bonusesString) {
      if (!bonusesString) return [];
      const bonuses = bonusesString.split(',').map(b => parseInt(b) || 0);
      // Remove stats 13 and 14 (last two in the array)
      return bonuses.slice(0, -2);
    },
    getStatName(index) {
      const statNames = [
        'Attack Stab', 'Attack Slash', 'Attack Crush', 'Attack Magic', 'Attack Ranged',
        'Defence Stab', 'Defence Slash', 'Defence Crush', 'Defence Magic', 'Defence Ranged',
        'Strength', 'Prayer', 'Magic Damage'
      ];
      return statNames[index] || `Stat ${index}`;
    },
    getEquipmentSlotName(slot) {
      const slotNames = {
        '0': 'Head',
        '1': 'Cape',
        '2': 'Amulet',
        '3': 'Weapon',
        '4': 'Body',
        '5': 'Shield',
        '6': 'Legs',
        '7': 'Gloves',
        '8': 'Boots',
        '9': 'Ring',
        '10': 'Ammo'
      };
      return slotNames[slot] || `Slot ${slot}`;
    },
    formatRequirements(requirements) {
      if (!requirements) return '';
      // Requirements format appears to be "{skill,level}"
      try {
        const parsed = JSON.parse(requirements);
        if (Array.isArray(parsed)) {
          return parsed.map(req => {
            const skillNames = {
              '0': 'Attack', '1': 'Defence', '2': 'Strength', '3': 'Hitpoints',
              '4': 'Ranged', '5': 'Prayer', '6': 'Magic', '7': 'Cooking',
              '8': 'Woodcutting', '9': 'Fletching', '10': 'Fishing', '11': 'Firemaking',
              '12': 'Crafting', '13': 'Smithing', '14': 'Mining', '15': 'Herblore',
              '16': 'Agility', '17': 'Thieving', '18': 'Slayer', '19': 'Farming',
              '20': 'Runecrafting', '21': 'Hunter', '22': 'Construction'
            };
            const skill = skillNames[req[0]] || `Skill ${req[0]}`;
            return `${skill} ${req[1]}`;
          }).join(', ');
        }
      } catch (e) {
        return requirements;
      }
      return requirements;
    }
  }
}
