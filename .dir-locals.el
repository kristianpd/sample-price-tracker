;; Matches the Visual Studio Code configuration in .vscode/settings.example.json, but also requires some manual setup:
;; - Major modes:
;;   - JavaScript: Included in Emacs
;;   - TSX: https://web-mode.org
;;   - JSON: https://github.com/joshwnj/json-mode
;;   - Markdown: https://jblevins.org/projects/markdown-mode
;;   - Nix: https://github.com/NixOS/nix-mode
;;   - TypeScript: https://github.com/emacs-typescript/typescript.el
;; - Language servers: https://emacs-lsp.github.io/lsp-mode
;;   - ESlint, TypeScript/JavaScript/JSON: Automatically installs
;;   - Nix: https://emacs-lsp.github.io/lsp-mode/page/lsp-nix
;; - Format on save: https://github.com/raxod502/apheleia
;;   - Nix: https://github.com/nix-community/nixpkgs-fmt
;;   - Prettier: https://github.com/fsouza/prettierd
((nil
  (lsp-clients-typescript-preferences (importModuleSpecifierPreference . "relative"))
  (lsp-clients-typescript-max-ts-server-memory . 8000)

  ;; Format on save
  (mode . apheleia)
  (apheleia-formatters
   (prettier "prettierd" filepath)
   (nixpkgs-fmt "nixpkgs-fmt"))

  (tab-width . 2))

 (js-mode
  (apheleia-formatter prettier)
  (eval lsp))

 (json-mode
  (apheleia-formatter prettier)
  (eval lsp))

 (markdown-mode
  (apheleia-formatter prettier))

 (nix-mode
  (apheleia-formatter nixpkgs-fmt)
  (eval lsp))

 (typescript-mode
  (apheleia-formatter prettier)
  (eval lsp))

 (web-mode
  (apheleia-formatter prettier)
  (eval lsp)))
