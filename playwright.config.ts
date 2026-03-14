import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./e2e",
    fullyParallel: true,
    forbidOnly: true,
    retries: 0,
    workers: 1,
    reporter: "html",

    expect: {
        toHaveScreenshot: {
            maxDiffPixelRatio: 0.01,
        },
    },

    snapshotPathTemplate:
        "e2e/__screenshots__/{projectName}/{testFilePath}/{arg}{ext}",

    webServer: {
        command: "npm run build && npm run start",
        port: 3000,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
    },

    projects: [
        {
            name: "desktop",
            use: {
                ...devices["Desktop Chrome"],
                viewport: { width: 1440, height: 900 },
            },
        },
        {
            name: "mobile",
            use: {
                ...devices["Desktop Chrome"],
                viewport: { width: 375, height: 812 },
                isMobile: true,
            },
        },
    ],
});
