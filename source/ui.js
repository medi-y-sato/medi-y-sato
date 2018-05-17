'use strict';
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Working on : mediba, inc.',
		url: 'https://www.mediba.jp'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/medisori21sa'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/medi-y-sato'
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>medibaって会社でネイティブアプリ作ったりしてます</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
