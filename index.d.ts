declare class CallableInstance
{
	constructor(property: string | symbol)
}

interface CallableInstance<R = any>
{
	(...argv: any[]): R;
	<T>(...argv: any[]): T;
}

export interface CallableInstanceConstructor<R = any>
{
	new(property: string | symbol): CallableInstance<R>;
	new<T>(property: string | symbol): CallableInstance<T>;
}

// @ts-ignore
export = CallableInstance
