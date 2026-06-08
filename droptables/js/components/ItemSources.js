export default {
  template: `
    <div class="item-sources">
      <div v-for="result in searchResults" :key="result.name" class="item-entry">
        <h2 class="item-name">{{ result.name }}</h2>
        
        <div v-if="result.items.length > 0" class="npc-sources">
          <table class="drop-table">
            <tbody>
              <tr class="header-row">
                <th></th>
                <th>NPC</th>
                <th @click="sortSection(result.items, 'sortValue')">Amount</th>
                <th @click="sortSection(result.items, 'weight')">Rarity</th>
              </tr>
              <tr v-for="item in result.items" :key="item.id + '-' + item.name">
                <td><img :src="iconURL(item.id)" :alt="result.name" /></td>
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
