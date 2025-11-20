# IEK – Git Project Template

Αυτό το αποθετήριο είναι σκελετός για **εξάσκηση Git**. Δεν απαιτούνται γνώσεις κατασκευής ιστοσελίδων.

## Στόχοι
- Χρήση `git init`, `add`, `commit`, `status`, `log`
- Εργασία με `branch` και `merge`
- Προβολή διαφορών `git diff` και επαναφορά (`restore`/`checkout`)
- Διαγραφή/εξαίρεση αρχείων (`git rm`, `.gitignore`)
- Tags & έκδοση (`git tag`)

## Δομή
```
assets/
  css/style.css
  js/script.js
  img/
docs/
  README.html (προαιρετικά δημιουργήστε από αυτό το README)
drafts/           # πρόχειρα (σκεφτείτε αν πρέπει να αγνοούνται)
temp/             # προσωρινά αρχεία (πρέπει να αγνοούνται)
index.html
README.md
.gitignore        # με σχόλια/οδηγίες
```

## Προτεινόμενες αλλαγές (μη τεχνικές)
- Αλλάξτε τίτλο/κείμενα στο `index.html`
- Αλλάξτε χρώμα `--primary` στο `assets/css/style.css`
- Προσθέστε εικόνα στον φάκελο `assets/img/` και αναφορά στο `index.html`
- Προσθέστε νέα σελίδα `about.html` ή ενότητα "Ομάδα"
- Συμπληρώστε το `.gitignore` (δείτε παρακάτω)

## Git ασκήσεις (ιδέες)
1. Δημιουργήστε branch `feature-colors`, αλλάξτε χρώματα στο CSS, κάντε 2–3 commits, και merge στο `main`.
2. Δημιουργήστε branch `feature-about` για νέα σελίδα/ενότητα και merge.
3. Προκαλέστε μικρό conflict αλλάζοντας την ίδια γραμμή στο `index.html` από δύο branches, και λύστε το.
4. Δημιουργήστε tag `v1.0` μετά το merge όλων.
5. Προσθέστε `.gitignore` κανόνες για `temp/`, αρχεία logs, αρχεία συστήματος.

## .gitignore – Τι πρέπει να αγνοείται;
- **Αρχεία συστήματος**: `.DS_Store` (macOS), `Thumbs.db` (Windows)
- **Προσωρινά/πρόχειρα**: φάκελος `temp/`, αρχεία `*.tmp`, `*.bak`
- **Logs**: `*.log`
- **Τοπικές ρυθμίσεις editor/IDE** (προαιρετικά): `.vscode/`, `.idea/`

> Δείτε το `.gitignore` μέσα στο repo: έχει σχόλια και TODOs για να το ολοκληρώσετε μόνοι σας.
