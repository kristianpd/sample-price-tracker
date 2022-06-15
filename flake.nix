{
  description = "Shopify faker development environment";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs = { self, flake-utils, nixpkgs }:
    (flake-utils.lib.eachSystem [
      "x86_64-linux"
      "x86_64-darwin"
      "aarch64-darwin"
    ]
      (system: nixpkgs.lib.fix (flake:
        let
          pkgs = nixpkgs.legacyPackages.${system};
          callPackage = pkgs.newScope (flake.packages // { inherit callPackage; });
        in
        {
          packages = {
            nodejs = pkgs.nodejs;

            shopify-cli = callPackage ./nix/packages/shopify-cli { };

            yarn = pkgs.yarn.override {
              nodejs = flake.packages.nodejs;
            };
          };

          devShell = pkgs.mkShell {
            packages = builtins.attrValues flake.packages;
          };
        }
      )));
}
