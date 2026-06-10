export default {
  template: `
    <div class="item-sources">
      <div v-for="result in processedResults" :key="result.name + '-' + sortKey + '-' + sortDirection" class="item-entry">
        <h2 class="item-name">{{ result.name }}</h2>
        
        <div v-if="result.items.length > 0" class="npc-sources">
          <table class="drop-table">
            <tbody>
              <tr class="header-row">
                <th></th>
                <th @click="sortSection('name')">NPC</th>
                <th @click="sortSection('minAmount')">Amount</th>
                <th @click="sortSection('weight')">Rarity</th>
              </tr>
              <tr v-for="(item, index) in result.items" :key="item.id + '-' + item.name + '-' + index">
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
      const sortedResults = this.searchResults.map(result => ({
        ...result,
        items: this.getSortedItems(result.items)
      }));
      return sortedResults;
    }
  },
  methods: {
    getSortedItems(items) {
      if (!this.sortKey || !items) return items;
      
      const itemsCopy = [...items];
      
      return itemsCopy.sort((a, b) => {
        let aVal, bVal;
        
        if (this.sortKey === 'weight') {
          // Sort by actual percentage for rarity
          aVal = parseFloat(a.percent);
          bVal = parseFloat(b.percent);
        } else if (this.sortKey === 'minAmount') {
          // Sort by minimum amount
          aVal = a.minAmount;
          bVal = b.minAmount;
        } else {
          aVal = a[this.sortKey];
          bVal = b[this.sortKey];
        }
        
        let comparison;
        if (typeof aVal === 'string') {
          comparison = this.sortDirection === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
        } else {
          comparison = this.sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
        }
        
        // If values are equal, sort by NPC name as secondary criterion for stability
        if (comparison === 0) {
          return a.name.localeCompare(b.name);
        }
        
        return comparison;
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
