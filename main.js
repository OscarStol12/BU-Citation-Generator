let authors = {};
let authorcount = 0;
let year = NaN;
let title = ``;
let journal = ``;
let volIssue = ``;
let pageFm = ``;

function handleNumberAuthors() {
    authorcount = parseInt(document.getElementById("author-nos").value);
    authorcount = Math.floor(authorcount);

    let setText = ``;
    for (let i = 1; i <= authorcount; i++) {
        setText += `<div class="author">
                        <div class="text"> Author ${i}'s Full Name: </div>
                        <div></div>
                        <input type="text" class="txt-input" id="author-${i}">
                        <div></div>
                        <button class="acceptor" onclick="handleAuthorInput(${i})">Enter</button>
                        <div></div>
                    </div>`;
    }

    document.getElementById("authors").innerHTML = setText;
}

function handleAuthorInput(author_no) {
    let name = document.getElementById(`author-${author_no}`).value;
    let subs = name.split(" ");
    let format = ``
    if ((author_no == authorcount) && (authorcount > 1)) {format += `and `}
    if (author_no == 1) {
        format += `${subs[subs.length - 1].toUpperCase().charAt(0)}${subs[subs.length - 1].substring(1)}, `;
        for (let i = 0; i < subs.length - 1; i++) {
            format += `${subs[i].toUpperCase().charAt(0)}`;
        }
    } else {
        for (let i = 0; i < subs.length - 1; i++) {
            format += `${subs[i].toUpperCase().charAt(0)}`;
        }
        format += ` ${subs[subs.length - 1].charAt(0).toUpperCase()}${subs[subs.length - 1].substring(1).toLowerCase()}`;
    }

    if (author_no == authorcount) format += `.`;
    else {
        if (author_no != authorcount - 1) format += `,`;
    }
    authors[`${author_no}`] = format;
    console.log(authors);
}

function handleYear() {
    year = parseInt(document.getElementById("year-pub").value);
}

function handleTitle() {
    title = document.getElementById("pap-title").value;
}

function handleJournal() {
    journal = document.getElementById("pap-journal").value;
}

function handleVolumeIssue() {
    let vol = document.getElementById("pap-vol").value;
    let issue = document.getElementById("pap-issue").value;

    volIssue = `${vol}(${issue})`;
}

function handlePaging() {
    let start = parseInt(document.getElementById("pg-start").value);
    let end = parseInt(document.getElementById("pg-end").value);

    pageFm = `${start}-${end}`;
}

function generateCitation() {
    let out = document.getElementById("output");
    if (title == `` || pageFm == `` || volIssue == `` || year === NaN || authorcount <= 0 || journal == `` || authors == {}) {
        out.innerHTML = `Some elements are missing. Please fill them out.`;
        return;
    }

    let final = ``;
    for (let i = 1; i <= authorcount; i++) {
        final += `${authors[`${i}`]} `;
    }
    final += ` ${year}. ${title}. ${journal}. ${volIssue}: ${pageFm}.`;
    out.innerHTML = final;
}
