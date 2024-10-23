import { type CopyOptions, type MemFsEditor } from 'mem-fs-editor';
import type { Data as TemplateData, Options as TemplateOptions } from 'ejs';
import type { OverloadParameters, OverloadReturnType } from '../types-utils.js';
import type BaseGenerator from '../generator.js';
export type Template<D extends TemplateData, G> = {
    /**
     * Template file, absolute or relative to templatePath().
     */
    source: string;
    /**
     * Conditional if the template should be written.
     * @param TemplateData
     * @param Generator
     * @returns
     */
    when?: (data: D, generator: G) => boolean;
    /**
     * Destination, absolute or relative to destinationPath().
     */
    destination?: string;
    /**
     * Mem-fs-editor copy options
     */
    copyOptions?: CopyOptions;
    /**
     * Ejs data
     */
    templateData?: TemplateData;
    /**
     * Ejs options
     */
    templateOptions?: TemplateOptions;
};
export type Templates<D extends TemplateData, G> = Array<Template<D, G>>;
export declare class FsMixin {
    fs: MemFsEditor;
    /**
     * Read file from templates folder.
     * mem-fs-editor method's shortcut, for more information see [mem-fs-editor]{@link https://github.com/SBoudrias/mem-fs-editor}.
     * Shortcut for this.fs!.read(this.templatePath(filepath))
     */
    readTemplate(this: BaseGenerator, ...args: OverloadParameters<MemFsEditor['read']>): OverloadReturnType<MemFsEditor['read']>;
    /**
     * Copy file from templates folder to destination folder.
     * mem-fs-editor method's shortcut, for more information see [mem-fs-editor]{@link https://github.com/SBoudrias/mem-fs-editor}.
     * Shortcut for this.fs!.copy(this.templatePath(from), this.destinationPath(to))
     */
    copyTemplate(this: BaseGenerator, ...args: OverloadParameters<MemFsEditor['copy']>): OverloadReturnType<MemFsEditor['copy']>;
    /**
     * Copy file from templates folder to destination folder.
     * mem-fs-editor method's shortcut, for more information see [mem-fs-editor]{@link https://github.com/SBoudrias/mem-fs-editor}.
     * Shortcut for this.fs!.copy(this.templatePath(from), this.destinationPath(to))
     */
    copyTemplateAsync(this: BaseGenerator, ...args: OverloadParameters<MemFsEditor['copyAsync']>): OverloadReturnType<MemFsEditor['copyAsync']>;
    /**
     * Read file from destination folder
     * mem-fs-editor method's shortcut, for more information see [mem-fs-editor]{@link https://github.com/SBoudrias/mem-fs-editor}.
     * Shortcut for this.fs!.read(this.destinationPath(filepath)).
     */
    readDestination(this: BaseGenerator, ...args: OverloadParameters<MemFsEditor['read']>): OverloadReturnType<MemFsEditor['read']>;
    /**
     * Read JSON file from destination folder
     * mem-fs-editor method's shortcut, for more information see [mem-fs-editor]{@link https://github.com/SBoudrias/mem-fs-editor}.
     * Shortcut for this.fs!.readJSON(this.destinationPath(filepath)).
     */
    readDestinationJSON(this: BaseGenerator, ...args: OverloadParameters<MemFsEditor['readJSON']>): OverloadReturnType<MemFsEditor['readJSON']>;
    /**
     * Write file to destination folder
     * mem-fs-editor method's shortcut, for more information see [mem-fs-editor]{@link https://github.com/SBoudrias/mem-fs-editor}.
     * Shortcut for this.fs!.write(this.destinationPath(filepath)).
     */
    writeDestination(this: BaseGenerator, ...args: OverloadParameters<MemFsEditor['write']>): OverloadReturnType<MemFsEditor['write']>;
    /**
     * Write json file to destination folder
     * mem-fs-editor method's shortcut, for more information see [mem-fs-editor]{@link https://github.com/SBoudrias/mem-fs-editor}.
     * Shortcut for this.fs!.writeJSON(this.destinationPath(filepath)).
     */
    writeDestinationJSON(this: BaseGenerator, ...args: OverloadParameters<MemFsEditor['writeJSON']>): OverloadReturnType<MemFsEditor['writeJSON']>;
    /**
     * Delete file from destination folder
     * mem-fs-editor method's shortcut, for more information see [mem-fs-editor]{@link https://github.com/SBoudrias/mem-fs-editor}.
     * Shortcut for this.fs!.delete(this.destinationPath(filepath)).
     */
    deleteDestination(this: BaseGenerator, ...args: OverloadParameters<MemFsEditor['delete']>): OverloadReturnType<MemFsEditor['delete']>;
    /**
     * Copy file from destination folder to another destination folder.
     * mem-fs-editor method's shortcut, for more information see [mem-fs-editor]{@link https://github.com/SBoudrias/mem-fs-editor}.
     * Shortcut for this.fs!.copy(this.destinationPath(from), this.destinationPath(to)).
     */
    copyDestination(this: BaseGenerator, ...args: OverloadParameters<MemFsEditor['copy']>): OverloadReturnType<MemFsEditor['copy']>;
    /**
     * Move file from destination folder to another destination folder.
     * mem-fs-editor method's shortcut, for more information see [mem-fs-editor]{@link https://github.com/SBoudrias/mem-fs-editor}.
     * Shortcut for this.fs!.move(this.destinationPath(from), this.destinationPath(to)).
     */
    moveDestination(this: BaseGenerator, ...args: OverloadParameters<MemFsEditor['move']>): OverloadReturnType<MemFsEditor['move']>;
    /**
     * Exists file on destination folder.
     * mem-fs-editor method's shortcut, for more information see [mem-fs-editor]{@link https://github.com/SBoudrias/mem-fs-editor}.
     * Shortcut for this.fs!.exists(this.destinationPath(filepath)).
     */
    existsDestination(this: BaseGenerator, ...args: OverloadParameters<MemFsEditor['exists']>): OverloadReturnType<MemFsEditor['exists']>;
    /**
     * Copy a template from templates folder to the destination.
     *
     * @param source - template file, absolute or relative to templatePath().
     * @param destination - destination, absolute or relative to destinationPath().
     * @param templateData - ejs data
     * @param templateOptions - ejs options
     * @param copyOptions - mem-fs-editor copy options
     */
    renderTemplate<D extends TemplateData = TemplateData>(this: BaseGenerator, source?: string | string[], destination?: string | string[], templateData?: string | D, templateOptions?: TemplateOptions, copyOptions?: CopyOptions): void;
    /**
     * Copy a template from templates folder to the destination.
     *
     * @param source - template file, absolute or relative to templatePath().
     * @param destination - destination, absolute or relative to destinationPath().
     * @param templateData - ejs data
     * @param templateOptions - ejs options
     * @param copyOptions - mem-fs-editor copy options
     */
    renderTemplateAsync<D extends TemplateData = TemplateData>(this: BaseGenerator, source?: string | string[], destination?: string | string[], templateData?: string | D, templateOptions?: TemplateOptions, copyOptions?: CopyOptions): Promise<void>;
    /**
     * Copy templates from templates folder to the destination.
     */
    renderTemplates<D extends TemplateData = TemplateData>(this: BaseGenerator, templates: Templates<D, typeof this>, templateData?: string | D): void;
    /**
     * Copy templates from templates folder to the destination.
     *
     * @param templates - template file, absolute or relative to templatePath().
     * @param templateData - ejs data
     */
    renderTemplatesAsync<D extends TemplateData = TemplateData>(this: BaseGenerator, templates: Templates<D, typeof this>, templateData?: string | D): Promise<void[]>;
    /**
     * Utility method to get a formatted data for templates.
     *
     * @param path - path to the storage key.
     * @return data to be passed to the templates.
     */
    _templateData<D extends TemplateData = TemplateData>(this: BaseGenerator, path?: string): D;
}
