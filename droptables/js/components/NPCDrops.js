export default {
  template: `
    <div class="npc-drops">
      <div v-for="result in searchResults" :key="result.name" class="npc-entry">
        <h2 class="npc-name">{{ result.name }}</h2>
        <div class="npc-ids">IDs: {{ result.ids }}</div>
        
        <div v-if="result.items.filter(i => i.weight === -1).length > 0" class="drop-section">
          <h3>Default Drops</h3>
          <table class="drop-table">
            <tbody>
              <tr class="header-row">
                <th></th>
                <th>Name</th>
                <th @click="sortSection(result.items.filter(i => i.weight === -1), 'sortValue')">Amount</th>
                <th>Rarity</th>
              </tr>
              <tr v-for="item in result.items.filter(i => i.weight === -1)" :key="item.id">
                <td><img :src="iconURL(item.id)" :alt="item.name" /></td>
                <td>{{ item.name }}</td>
                <td>
                  <div>{{ item.amountDisplay }}</div>
                  <div class="debug-hide">{{ item.perKillAverage }}</div>
                </td>
                <td class="always">Always</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="result.items.filter(i => i.weight !== -1).length > 0" class="drop-section">
          <h3>Main Drops</h3>
          <table class="drop-table">
            <tbody>
              <tr class="header-row">
                <th></th>
                <th>Name</th>
                <th @click="sortSection(result.items.filter(i => i.weight !== -1), 'sortValue')">Amount</th>
                <th @click="sortSection(result.items.filter(i => i.weight !== -1), 'weight')">Rarity</th>
              </tr>
              <tr v-for="item in result.items.filter(i => i.weight !== -1)" :key="item.id">
                <td><img :src="iconURL(item.id)" :alt="item.name" /></td>
                <td>{{ item.name }}</td>
                <td>
                  <div>{{ item.amountDisplay }}</div>
                  <div class="debug-hide">{{ item.perKillAverage }}</div>
                </td>
                <td :class="rarityClass(item)" :title="item.percent + '%'">{{ item.rarity }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="result.tertiary.length > 0" class="drop-section">
          <h3>Tertiary Drops</h3>
          <table class="drop-table">
            <tbody>
              <tr class="header-row">
                <th></th>
                <th>Name</th>
                <th @click="sortSection(result.tertiary, 'sortValue')">Amount</th>
                <th @click="sortSection(result.tertiary, 'weight')">Rarity</th>
              </tr>
              <tr v-for="item in result.tertiary" :key="item.id">
                <td><img :src="iconURL(item.id)" :alt="item.name" /></td>
                <td>{{ item.name }}</td>
                <td>
                  <div>{{ item.amountDisplay }}</div>
                  <div class="debug-hide">{{ item.perKillAverage }}</div>
                </td>
                <td :class="rarityClass(item)" :title="item.percent + '%'">{{ item.rarity }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="result.charms.length > 0" class="drop-section">
          <h3>Charm Drops</h3>
          <table class="drop-table">
            <tbody>
              <tr class="header-row">
                <th></th>
                <th>Name</th>
                <th @click="sortSection(result.charms, 'sortValue')">Amount</th>
                <th @click="sortSection(result.charms, 'weight')">Rarity</th>
              </tr>
              <tr v-for="item in result.charms" :key="item.id">
                <td><img :src="iconURL(item.id)" :alt="item.name" /></td>
                <td>{{ item.name }}</td>
                <td>
                  <div>{{ item.amountDisplay }}</div>
                  <div class="debug-hide">{{ item.perKillAverage }}</div>
                </td>
                <td :class="rarityClass(item)" :title="item.percent + '%'">{{ item.rarity }}</td>
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
    sortItems: {
      type: Function,
      required: true
    },
    iconURL: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      sortStates: {}
    }
  },
  methods: {
    rarityClass(item) {
      const percent = parseFloat(item.percent);
      if (percent > 99.99) return 'always';
      if (percent > 4) return 'common';
      if (percent > 1) return 'uncommon';
      if (percent > 0.1) return 'rare';
      return 'veryrare';
    },
    sortSection(items, key) {
      const stateKey = key;
      this.sortStates[stateKey] = !this.sortStates[stateKey];
      items.sort((a, b) => {
        const aVal = a[key];
        const bVal = b[key];
        return this.sortStates[stateKey] ? aVal - bVal : bVal - aVal;
      });
    }
  }
}
