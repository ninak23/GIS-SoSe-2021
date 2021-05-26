console.log("hallo Node JS Server");

function test(): void {
    let x: number = 10;
    let a: string[] = ["hallo", "gh", "sdf"];

    console.log(a[1], x);
}

test();


let formData: FormData = new FormData(document.forms[0]);
