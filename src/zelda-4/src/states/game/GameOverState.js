import Input from '../../../lib/Input.js';
import State from '../../../lib/State.js';
import GameStateName from '../../enums/GameStateName.js';
import {
	CANVAS_HEIGHT,
	CANVAS_WIDTH,
	context,
	input,
	stateMachine,
} from '../../globals.js';

export default class GameOverState extends State {
	/**
	 * Displays a game over screen where the player
	 * can press enter to start a new game.
	 */
	constructor() {
		super();
	}

	update() {
		if (input.isKeyPressed(Input.KEYS.ENTER)) {
			stateMachine.change(GameStateName.Play);
		}
	}

	render() {
		context.font = '60px Zelda';
		context.fillStyle = 'crimson';
		context.textBaseline = 'middle';
		context.textAlign = 'center';
		context.fillText('Game Over', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
		context.font = '30px Zelda';
		context.fillStyle = 'white';
		context.fillText(
			'press enter to continue',
			CANVAS_WIDTH / 2,
			CANVAS_HEIGHT - 40
		);
	}
}
