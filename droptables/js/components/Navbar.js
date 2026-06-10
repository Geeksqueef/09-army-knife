export default {
  template: `
    <div class="navbar">
      <div class="nav-tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab"
          @click="selectTab(tab)"
          :class="{ active: currentTab === tab }"
        >
          {{ tab }}
        </button>
      </div>
      <input 
        type="text" 
        v-model="searchInput" 
        :placeholder="getPlaceholder"
        @input="updateInput"
        class="search-input"
      />
    </div>
  `,
  data() {
    return {
      tabs: ['NPC Drop tables', 'Item Sources', 'Item Data'],
      currentTab: 'NPC Drop tables',
      searchInput: ''
    }
  },
  computed: {
    getPlaceholder() {
      const placeholders = {
        'NPC Drop tables': 'Enter NPC name',
        'Item Sources': 'Enter Item Name',
        'Item Data': 'Enter an Item Name'
      };
      return placeholders[this.currentTab] || 'Search...';
    }
  },
  methods: {
    selectTab(tab) {
      this.currentTab = tab;
      this.$emit('update-pick', tab);
    },
    updateInput() {
      this.$emit('update-input', this.searchInput);
    }
  }
}
