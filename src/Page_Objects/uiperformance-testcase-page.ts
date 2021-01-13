import  Dashboard  from "./dashboard";

export default class UiPerformanceTestPage extends Dashboard{
    private static uiPerfromanceTestPage: UiPerformanceTestPage = null;

    public static getInstance():UiPerformanceTestPage{
        this.uiPerfromanceTestPage = new UiPerformanceTestPage()
        return this.uiPerfromanceTestPage
    }
}