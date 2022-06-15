{ lib
, bundlerApp
, writeShellScriptBin
, ruby
, bundix
}:

# Update with: nix run .#shopify-cli.update
bundlerApp {
  pname = "shopify-cli";
  gemdir = ./.;
  exes = [ "shopify" ];

  passthru = {
    update = writeShellScriptBin "update-krane" ''
      cd nix/packages/shopify-cli
      ${ruby}/bin/bundle lock --update
      ${bundix}/bin/bundix
    '';
  };

  meta = with lib; {
    description = "Shopify CLI helps you build against the Shopify platform faster";
    homepage = "https://github.com/Shopify/shopify-cli";
    license = licenses.free;
    maintainers = with maintainers; [ kira-bruneau ];
  };
}
