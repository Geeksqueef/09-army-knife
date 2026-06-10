export default {
  template: `
    <div class="item-sources">
      <div v-for="result in processedResults" :key="result.name" class="item-entry">
        <h2 class="item-name">{{ result.name }}</h2>
        
        <div v-if="result.items.length > 0" class="npc-sources">
          <table class="drop-table">
            <tbody>
              <tr class="header-row">
                <th></th>
                <th @click="sortSection('name')">NPC</th>
                <th @click="sortSection('sortValue')">Amount</th>
                <th @click="sortSection('weight')">Rarity</th>
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
      sortKey: null,
      sortDirection: 'asc'
    }
  },
  computed: {
    processedResults() {
      return this.searchResults.map(result => ({
        ...result,
        items: this.getSortedItems(result.items)
      }));
    }
  },
  methods: {
    getSortedItems(items) {
      if (!this.sortKey) return items;
      
      return [...items].sort((a, b) => {
        const aVal = a[this.sortKey];
        const bVal = b[this.sortKey];
        if (typeof aVal === 'string') {
          return this.sortDirection === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
        }
        return this.sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      });
    },
    rarityClass(item) {
      const percent = parseFloat(item.percent);
      if (percent > 99.99) return 'always';
      if (percent > 4) return 'common';
      if (percent > 1) return 'uncommon';
      if (percent > 0.1) return 'rare';
      return 'veryrare';
    },
    sortSection(key) {
      if (this.sortKey === key) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortKey = key;
        this.sortDirection = 'asc';
      }
    }
  }
}
