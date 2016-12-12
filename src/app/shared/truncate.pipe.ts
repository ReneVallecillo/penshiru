import { Pipe, PipeTransform } from '@angular/core';

/**
 * Truncate a string to the given length and append suffix.
 * @param	length Text max length. Default 20.
 * @param	suffix Appended to the end of the string if truncted. Default ''.
 * @example Usage:
 * ```html
 * <p>{{ 'Hello world' | truncate:5:'...' }}</p>
 * <!-- Formats to: 'Hello...' -->
 * ```
 * from: https://github.com/ghpabs/angular2-seed-project/blob/master/src/scripts/shared/pipes/truncate.pipe.ts#L13
 */


@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, args1: string, args2:string): string {
    let length = parseInt(args1 || '20', 10),
			suffix = args2 || '';

		if (value.length <= length) {
			return value;
		}

		return value.substring(0, length) + suffix;
	}
}
