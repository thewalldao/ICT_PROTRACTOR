import * as filePath from 'path';
export default class ProjectPath {

    static conf: string = ProjectPath.getPath("built\\conf").replace(/\\/g,"/");
    static testCases: string = ProjectPath.getPath("built\\TestCases").replace(/\\/g,"/");
    static testData: string = ProjectPath.getPath("built\\test-data").replace(/\\/g,"/");
    static pageObjects: string = ProjectPath.getPath("built\\Page_Objects").replace(/\\/g,"/");
    // static dataObjects: string = ProjectPath.getPath("built\\data-objects").replace(/\\/g,"/");
	static utilities: string = ProjectPath.getPath("built\\Utilities").replace(/\\/g, "/");
	// static test_helpers : string = ProjectPath.getPath("built\\test-helpers").replace(/\\/g, "/");
	static project : string = ProjectPath.getPath().replace(/\\/g, "/");
	static nodeModules : string = ProjectPath.getPath("/node_modules").replace(/\\/g, "/");

    /**
	 * Get the current file directory
	 * @static
	 * @param {string} filename
	 * @memberof ProjectPath
	 */
	private static getPath(filename?: string): string {
		try {
			let splitString: number = "built\\test-data\\general".length;
			let projectPath: string = __dirname.slice(0, __dirname.length - splitString);

			if (filename == null) {
				return projectPath;
			} else {
				return filePath.join(projectPath, filename);
			}
		} catch (err) {
			console.log(err);
		}
	}
}




