import * as Phaser from 'phaser';
import { ARCADE_PIX_FONT, ARCADE_PIX_TITLE, TEXT_SPACING } from '../conf/constants';

const sceneCfg: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Main menu'
};

export class MainMenuScene extends Phaser.Scene {
    constructor() {
        super(sceneCfg);
    }

    cursor: Phaser.GameObjects.Text;
    cursorPointer = 0;

    menuData = {
        title: 'BEAMS!',
        options: [
            {
                label: 'Start',
                action: () => {
                    this.scene.start('Game');
                }
            },
            {
                label: 'Load',
                action: () => {}
            },
            {
                label: 'Credits',
                action: () => {}
            }
        ]
    };
    
    menuStartingY = TEXT_SPACING * 3;
    menuStartingX = TEXT_SPACING * 2;

    public create() {
        this.add.text(TEXT_SPACING * 2, TEXT_SPACING, this.menuData.title, ARCADE_PIX_TITLE);
        this.cursor = this.add.text(this.menuStartingX - TEXT_SPACING, this.menuStartingY, '>', ARCADE_PIX_FONT);

        for (const [index, opt] of this.menuData.options.entries()) {
            const menuItem = this.add.text(
                this.menuStartingX,
                this.menuStartingY + (index * TEXT_SPACING),
                opt.label,
                ARCADE_PIX_FONT
            );

        }

        const keyArrowUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        const keyArrowDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        const KeyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        keyArrowUp.addListener(Phaser.Input.Keyboard.Events.DOWN, () => {
            this.cursorPointer = (this.cursorPointer === 0) ? this.menuData.options.length - 1 : this.cursorPointer - 1;
            this.cursor.y = (this.menuStartingY + (this.cursorPointer * TEXT_SPACING));
        });

        keyArrowDown.addListener(Phaser.Input.Keyboard.Events.DOWN, () => {
            this.cursorPointer = (this.cursorPointer === this.menuData.options.length - 1) ? 0 : this.cursorPointer + 1;
            this.cursor.y = (this.menuStartingY + (this.cursorPointer * TEXT_SPACING));
        });

        KeyEnter.addListener(Phaser.Input.Keyboard.Events.DOWN, () => {
            const fn = this.menuData.options[this.cursorPointer].action;

            if (fn) {
                fn();
            }
        });
    }
}
