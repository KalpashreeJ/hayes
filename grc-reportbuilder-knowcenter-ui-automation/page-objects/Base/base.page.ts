import { Element } from 'webdriverio';
import { TIME_OUT } from './time-out.enum';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export class BasePage {
    /**
    * Opens a sub page of the page
    */

    constructor() {

    }

    async maximizeWindow() {
        await browser.maximizeWindow();
    }

    /**
    * Opens the page with the specified url */


    async handleKeyControls(keys: string) {
        await browser.keys([keys]);
    }

    async findElement(elementLocator: string, timeout: number = TIME_OUT.xxxl) {
        const element: Element<"async"> = await browser.$(elementLocator);
        await element.waitForExist({
            timeout: timeout
        });
        return element;
    }
    
    async enterText(elementLocator: string, textToEnter: string, timeout: number = TIME_OUT.xxxl) {
        const element: Element<"async"> = await this.findElement(elementLocator, timeout);
        await this.waitTillElementDisplayed(elementLocator, timeout);
        await element.click();
        return await element.setValue(textToEnter);
    }

    async waitTillElementClickable(elementLocator: string, timeout: number = TIME_OUT.xxxl) {
        const element: Element<"async"> = await this.findElement(elementLocator, timeout);
        await element.waitForClickable({
            timeout: timeout
        })
    }

    async clickElement(elementLocator: string, timeout: number = TIME_OUT.xxxl) {
        const element: Element<"async"> = await this.findElement(elementLocator, timeout);
        await this.waitTillElementClickable(elementLocator, timeout)
        return await element.click();
    }

    async getElementText(elementLocator: string, timeout: number = TIME_OUT.xxxl) {
        const element: Element<"async"> = await this.findElement(elementLocator, timeout);
        return element.getText();
    }

    async getBrowserTitle() {
        return browser.getTitle();
    }

    async findElements(elementLocator: string, timeout: number = TIME_OUT.xxxl) {
        let elements: Element<"async">[] = await browser.$$(elementLocator);
        if (elements.length > 0) {
            await elements[0].waitForExist({
                timeout: timeout
            });
            return elements;
        }

    }

    async selectDropdownValue(elementLocator: string, value: string, parentElementLocator: string = null, timeout: number = TIME_OUT.xxxl) {
        const dropDownItemValues: Element<"async">[] = await this.findElements(elementLocator, timeout);
        let elem;
        for (let i = 0; i < dropDownItemValues.length; i++) {
            elem = await dropDownItemValues[i].getText();
            if (elem === value) {
                if (parentElementLocator != null) {
                    const dropDownItem: Element<"async"> = await (this.findElement('(' + elementLocator + ')[' + (i + 1) + ']' + parentElementLocator, timeout));
                    await dropDownItem.click();
                    break;
                }
                else {
                    await dropDownItemValues[i].click();
                }
            }
        }

    }


    async moveAndClickElementInTableData(rowElementLocator: string, columnElementLocator: string, elementLocator: string, criteria: string, timeout: number = TIME_OUT.xxxl) {
        const rowElements: Element<"async">[] = await this.findElements(rowElementLocator, timeout);
        if (rowElements != null) {
            for (let i = 0; i < await rowElements.length; i++) {
                const columnElements: Element<"async">[] = await this.findElements(rowElementLocator + '[' + (i + 1) + ']' + columnElementLocator);
                for (let j = 0; j < columnElements.length; j++) {
                    let columnData = await columnElements[j].getText();
                    if ((columnData).includes(criteria)) {
                        await rowElements[i].moveTo();
                        await this.clickElement(rowElementLocator + '[' + (i + 1) + ']' + elementLocator);
                    }
                }
            }
        }
    }

    async pressEnterAndWaitForText(elementLocator: string, value: string, keyControl: string, timeout: number = TIME_OUT.xxxl) {
        await browser.waitUntil(
            async () => (
                await this.handleKeyControls(keyControl),
                await $(elementLocator).getText()).includes(value),
            {
                timeout: timeout,
                timeoutMsg: 'Element not fount in the given time'
            }
        );
    }

    async clickAndWaitUntillDropdownDisplayed(elementLocator: string, dropDownElementLocator: string, timeout: number = TIME_OUT.xxxl) {
        await browser.waitUntil(
            async () => (
                await this.clickElement(elementLocator),
                await (await $(dropDownElementLocator)).isExisting()) === true,
            {
                timeout: timeout,
                timeoutMsg: 'Element not found in the given time'
            }
        );
    }

    async waitUntilElementExists(elementLocator: string, timeout: number = TIME_OUT.xxxl) {
        await browser.waitUntil(
            async () => (
                await (await $(elementLocator)).isExisting()) === true,
            {
                timeout: timeout,
                timeoutMsg: 'Element not fount in the given time'
            }
        );
    }

    async waitUntilTextDisplayed(elementLocator: string, value: string, timeout: number = TIME_OUT.xxxl) {
        await browser.waitUntil(
            async () => (await $(elementLocator).getText()).includes(value),
            {
                timeout: timeout,
                timeoutMsg: 'Element not fount in the given time'
            }
        );
    }

    async waitUntilElementIsClickable(elementLocator, timeout: number = TIME_OUT.xxxl) {
        await browser.waitUntil(
            async () => (
                await (await elementLocator).isClickable()) === true,
            {
                timeout: timeout,
                timeoutMsg: 'Element not found in the given time'
            }
        );
    }

    async waitTillElementDisplayed(elementLocator: string, timeout: number = TIME_OUT.xxxl) {
        const element: Element<"async"> = await this.findElement(elementLocator, timeout);
        await element.waitForDisplayed({
            timeout: timeout
        })
    }

    async checkElementFocus(elementLocator: string, timeout: number = TIME_OUT.xxxl) {
        const element: Element<"async"> = await this.findElement(elementLocator, timeout);
        await element.isFocused()
    }

    async switchToTabByUrl(url: string) {
        await browser.switchWindow(url);        
    }

    async switchToTabByTitle(title: string) {
        await browser.switchWindow(title);
    }

    async switchToIframeById(id: string) {

        await browser.pause(5000);
        let currentFrame;
        let currentFrameId;
        let iframes = await this.findElements('//iframe');
        for (let i = 0; i < iframes.length; i++) {
            currentFrame = iframes[i];
            currentFrameId = await currentFrame.getAttribute('id');
            if (currentFrameId == id) {
                await browser.switchToFrame(currentFrame);
                break;
            }
        }
    }

    async switchToIframeByXpath(elementLocator: string) {
        const element: Element<"async"> = await this.findElement(elementLocator);
        await browser.switchToFrame(element);
    }

    async switchToParentFrame() {
        await browser.switchToParentFrame();
    }

    async switchContext(context: string) {
        await browser.switchContext(context);
    }

    async getContext() {
        return await browser.getContext();
    }

    async moveToElement(elementLocator: string, timeout: number = TIME_OUT.xxxl) {
        const element: Element<"async"> = await this.findElement(elementLocator, timeout);
        await element.moveTo();
    }

    async isElementExists(elementLocator: string, timeout: number = TIME_OUT.xxxl) {
        const element: Element<"async"> = await this.findElement(elementLocator, timeout);
        let bool = await element.isExisting();
        return bool;
    }
}
