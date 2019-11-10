const $wDeclarationBuilder = require("../../scripts/selector-declaration-builder");

describe("define $w.d.ts", () => {
  function get$wDts({
    servicePath,
    tripleSlashDirectivePath = "directive"
  } = {}) {
    const services = [require("./services/$w.service.json")];
    if (servicePath) {
      services.push(require(servicePath));
    }

    return $wDeclarationBuilder(services, tripleSlashDirectivePath);
  }

  describe("triple slash directive", () => {
    test("should generate triple slash directive with the given path", () => {
      const tripleSlashDirectivePath = "../common/utilityTypes.d.ts";
      const dts = get$wDts({ tripleSlashDirectivePath });
      const expectedDeceleration = `/// <reference path="${tripleSlashDirectivePath}" />`;

      expect(dts).toContain(expectedDeceleration);
    });
  });

  describe("TypeNameToSdkType", () => {
    test("should generate type declaration", () => {
      const dts = get$wDts();
      const expectedDeceleration = "declare type TypeNameToSdkType = {";

      expect(dts).toContain(expectedDeceleration);
    });

    test("should include queryable services declaration", () => {
      const dts = get$wDts({ servicePath: "./services/Gallery.service.json" });
      const expectedDeceleration = "Gallery: $w.Gallery;";

      expect(dts).toContain(expectedDeceleration);
    });

    test("should not include unqueryable services declaration", () => {
      const dts = get$wDts({ servicePath: "./services/CartIcon.service.json" });
      const unexpectedDeceleration = "CartIcon: $w.CartIcon;";

      expect(dts).not.toContain(unexpectedDeceleration);
    });
  });

  describe("WixElementSelector", () => {
    test("should generate WixElementSelector type", () => {
      const dts = get$wDts();
      const expectedDeceleration =
        "type WixElementSelector = PageElementsMap & IntersectionArrayAndBase<TypeNameToSdkType, 'Document'>";

      expect(dts).toContain(expectedDeceleration);
    });
  });

  describe("$w function declaration", () => {
    test("should generate $w function declaration", () => {
      const dts = get$wDts();
      const expectedDeceleration =
        "declare function $w<T extends keyof WixElementSelector>(selector: T): WixElementSelector[T]";

      expect(dts).toContain(expectedDeceleration);
    });
  });

  describe("$w namespace declaration", () => {
    test("should generate $w namespace declaration", () => {
      const dts = get$wDts();
      const expectedDeceleration = "declare namespace $w {";

      expect(dts).toContain(expectedDeceleration);
    });

    test("should generate at function declaration", () => {
      const dts = get$wDts();
      const expectedDeceleration =
        "function at(context: $w.Event.EventContext): $w.$w;";

      expect(dts).toContain(expectedDeceleration);
    });

    test("should generate onReady function declaration", () => {
      const dts = get$wDts();
      const expectedDeceleration =
        "function onReady(initFunction: $w.ReadyHandler): void;";

      expect(dts).toContain(expectedDeceleration);
    });

    test("should generate $w function type declaration", () => {
      const dts = get$wDts();
      const expectedDeceleration =
        "type $w = <T extends keyof WixElementSelector>(selector: T)=>WixElementSelector[T]";

      expect(dts).toContain(expectedDeceleration);
    });
  });
});
