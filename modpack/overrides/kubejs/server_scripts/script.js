// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// FIX SPECTRUM AMETHYST BANNER PATTERN <=> HEXCASTING EMPTY SCROLL CONFLICT
	event.remove({id: 'spectrum:crafting_table/banner_patterns/amethyst_shard_banner_pattern'})
	event.shaped('1x spectrum:amethyst_shard_banner_pattern', [
		'PA ',
		'   ',
		'   '
	], {
		P: 'minecraft:paper',
		A: 'minecraft:amethyst_shard'
	})
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})