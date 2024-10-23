export default deprecate;
declare function deprecate(message: any, fn: any): (...args: any[]) => any;
declare namespace deprecate {
    function log(message: any): void;
    function object(message: any, object: any): any[];
    function property(message: any, object: any, property: any): void;
}
