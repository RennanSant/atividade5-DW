import { promisify } from "util";
import { exec } from "child_process";

const execAsync = promisify(exec);

export async function dir(path="") {
    const command = `dir ${path}`;

    const result = await execAsync(command);
    
    console.log('dir', result);
    return result;
};

