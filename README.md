# Task: Dependency Upgrade Verification (React + TypeScript)

Your task is to analyze and upgrade dependencies in this React + TypeScript project.
This project uses **pnpm** as its package manager.

---

## Goals

### 1. Identify obsolete or deprecated dependencies
- Detect outdated versions.
- Detect packages with known security issues.
- Detect deprecated libraries.

### 2. Generate version diff
- Compare `package-baseline.json` and the project's current `package.json`.
- Output results into `dependency_diff.txt`.

### 3. Upgrade dependencies properly
- Update dependencies to the latest safe and compatible versions.
- Update TypeScript, Vite, ESLint, React if necessary.
- Ensure build still succeeds.

### 4. Validate that onboarding instructions succeed
- Install environment with `setup.sh`
- Run `pnpm install`
- Run `pnpm dev`

If project fails to run, record issues inside `defects.txt` with full error traces.

### 5. Generate fixed documentation
Produce:
- `corrected_readme.md` — Updated instructions based on actual project behavior.
- `obsolete_warnings.md` — List of obsolete packages and reasoning.

---

## Expected Outputs

1. **defects.txt**
   - All dependency-related errors
   - Build failures
   - Execution errors
   - Reproduction steps

2. **corrected_readme.md**
   - Fully working onboarding steps
   - Updated dependency recommendations

3. **dependency_diff.txt**
   - Added / Removed / Updated dependency versions in a structured diff format

4. **obsolete_warnings.md**
   - Deprecated libraries
   - Vulnerability summaries
   - Required migration notes

5. **package-latest.json**
   - Model-generated file containing upgraded dependencies

6. **(Optional) patches/**  
   - Any code modifications needed due to breaking changes

---

## Environment

- Node version: Use project-specified `.nvmrc` OR Node 20+
- Package manager: pnpm
- Framework: React 18 + TypeScript + Vite

---

## Commands to Verify

Run the following and ensure no failures:

```sh
pnpm install
pnpm build
pnpm dev
