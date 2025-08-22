import {Page, expect, Locator } from "@playwright/test"

export class LoginPage{

    //define selector

    readonly page: Page
    readonly Username: Locator
    readonly Password: Locator
    readonly LoginButton: Locator


    //init selectors using constructor

    constructor(page: Page){
        this.page = page
        this.Username = page.getByPlaceholder("Username")
        this.Password = page.getByPlaceholder("Password")
        this.LoginButton = page.getByRole("button", {name: "Login"})
    }

    //Define methods

        //navigate to website
        async visitAndLogin(){
            await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            await this.Username.fill("Admin")
            await this.Password.fill("admin123")
            await this.LoginButton.click()
        }
        
}