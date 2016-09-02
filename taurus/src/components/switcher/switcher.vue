<template>
	<div class="form-item--toggle" :class="{'form-item--toggle--wide':wide}">
		<input class="toggle__radio" :id="'switcher-' + uuid + '-one'"
		       data-toggle-value="on" type="radio"
		       :value="true"
		       v-model='value'
		       :disabled='disabled'>
		<label :for="'switcher-' + uuid + '-one'">{{onText}}</label>
		<input class="toggle__radio" :id="'switcher-' + uuid + '-two'"
		       data-toggle-value="off" type="radio"
		       v-model='value'
		       :value="false"
		       :disabled='disabled'>
		<label :for="'switcher-' + uuid + '-two'">{{offText}}</label>
		<div class="form-item--toggle__switch">
			<span class="icon-drag"></span>
		</div>
		<div class="form-item--toggle__track"></div>
	</div>
</template>
<script>
	export default {
		props: {
			onText: {
				type: String,
				required: true,
				default: 'ON'
			},
			offText: {
				type: String,
				required: true,
				default: 'OFF'
			},
			value: {
				type: Boolean,
				default: true,
				twoWay: true
			},
			disabled: {
				type: Boolean,
				default: true
			},
			wide: {
				type: Boolean,
				default: false
			}
		},
		data () {
			return {
				uuid: Math.random().toString(36).substring(3, 8)  //唯一标识
			}
		},
		watch: {
			value (newValue) {
				this.$emit('on-change', newValue);
			}
		},
		methods: {
			toggle () {
				this.value = !this.value;
			},
			setValue (value) {
				if (this.value === value) return;
				this.value = value;
			},
			getValue () {
				return this.value;
			},
			enable () {
				this.disabled = false;
			},
			disable () {
				this.disabled = true;
			}

		}
	}
</script>
