/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {NodePath} from 'babel-traverse';
import * as babel from 'babel-types';
import {VisitorOption} from './estraverse-shim';

export type VisitResult = VisitorOption|null|undefined|void;
export type VisitorCallback<N extends babel.Node> =
    (node: N, parent: babel.Node|undefined|null, path: NodePath<N>) =>
        VisitResult;

export interface Visitor {
  readonly enter?: VisitorCallback<babel.Node>;
  readonly leave?: VisitorCallback<babel.Node>;
  readonly enterIdentifier?: VisitorCallback<babel.Identifier>;
  readonly leaveIdentifier?: VisitorCallback<babel.Identifier>;

  readonly enterLiteral?: VisitorCallback<babel.Literal>;
  readonly leaveLiteral?: VisitorCallback<babel.Literal>;

  readonly enterProgram?: VisitorCallback<babel.Program>;
  readonly leaveProgram?: VisitorCallback<babel.Program>;

  readonly enterExpressionStatement?:
      VisitorCallback<babel.ExpressionStatement>;
  readonly leaveExpressionStatement?:
      VisitorCallback<babel.ExpressionStatement>;

  readonly enterBlockStatement?: VisitorCallback<babel.BlockStatement>;
  readonly leaveBlockStatement?: VisitorCallback<babel.BlockStatement>;

  readonly enterEmptyStatement?: VisitorCallback<babel.EmptyStatement>;
  readonly leaveEmptyStatement?: VisitorCallback<babel.EmptyStatement>;

  readonly enterDebuggerStatement?: VisitorCallback<babel.DebuggerStatement>;
  readonly leaveDebuggerStatement?: VisitorCallback<babel.DebuggerStatement>;

  readonly enterWithStatement?: VisitorCallback<babel.WithStatement>;
  readonly leaveWithStatement?: VisitorCallback<babel.WithStatement>;

  readonly enterReturnStatement?: VisitorCallback<babel.ReturnStatement>;
  readonly leaveReturnStatement?: VisitorCallback<babel.ReturnStatement>;

  readonly enterLabeledStatement?: VisitorCallback<babel.LabeledStatement>;
  readonly leaveLabeledStatement?: VisitorCallback<babel.LabeledStatement>;

  readonly enterBreakStatement?: VisitorCallback<babel.BreakStatement>;
  readonly leaveBreakStatement?: VisitorCallback<babel.BreakStatement>;

  readonly enterContinueStatement?: VisitorCallback<babel.ContinueStatement>;
  readonly leaveContinueStatement?: VisitorCallback<babel.ContinueStatement>;

  readonly enterIfStatement?: VisitorCallback<babel.IfStatement>;
  readonly leaveIfStatement?: VisitorCallback<babel.IfStatement>;

  readonly enterSwitchStatement?: VisitorCallback<babel.SwitchStatement>;
  readonly leaveSwitchStatement?: VisitorCallback<babel.SwitchStatement>;

  readonly enterSwitchCase?: VisitorCallback<babel.SwitchCase>;
  readonly leaveSwitchCase?: VisitorCallback<babel.SwitchCase>;

  readonly enterThrowStatement?: VisitorCallback<babel.ThrowStatement>;
  readonly leaveThrowStatement?: VisitorCallback<babel.ThrowStatement>;

  readonly enterTryStatement?: VisitorCallback<babel.TryStatement>;
  readonly leaveTryStatement?: VisitorCallback<babel.TryStatement>;

  readonly enterCatchClause?: VisitorCallback<babel.CatchClause>;
  readonly leaveCatchClause?: VisitorCallback<babel.CatchClause>;

  readonly enterWhileStatement?: VisitorCallback<babel.WhileStatement>;
  readonly leaveWhileStatement?: VisitorCallback<babel.WhileStatement>;

  readonly enterDoWhileStatement?: VisitorCallback<babel.DoWhileStatement>;
  readonly leaveDoWhileStatement?: VisitorCallback<babel.DoWhileStatement>;

  readonly enterForStatement?: VisitorCallback<babel.ForStatement>;
  readonly leaveForStatement?: VisitorCallback<babel.ForStatement>;

  readonly enterForInStatement?: VisitorCallback<babel.ForInStatement>;
  readonly leaveForInStatement?: VisitorCallback<babel.ForInStatement>;

  readonly enterForOfStatement?: VisitorCallback<babel.ForOfStatement>;
  readonly leaveForOfStatement?: VisitorCallback<babel.ForOfStatement>;

  readonly enterFunctionDeclaration?:
      VisitorCallback<babel.FunctionDeclaration>;
  readonly leaveFunctionDeclaration?:
      VisitorCallback<babel.FunctionDeclaration>;

  readonly enterVariableDeclaration?:
      VisitorCallback<babel.VariableDeclaration>;
  readonly leaveVariableDeclaration?:
      VisitorCallback<babel.VariableDeclaration>;

  readonly enterVariableDeclarator?: VisitorCallback<babel.VariableDeclarator>;
  readonly leaveVariableDeclarator?: VisitorCallback<babel.VariableDeclarator>;

  readonly enterThisExpression?: VisitorCallback<babel.ThisExpression>;
  readonly leaveThisExpression?: VisitorCallback<babel.ThisExpression>;

  readonly enterArrayExpression?: VisitorCallback<babel.ArrayExpression>;
  readonly leaveArrayExpression?: VisitorCallback<babel.ArrayExpression>;

  readonly enterObjectExpression?: VisitorCallback<babel.ObjectExpression>;
  readonly leaveObjectExpression?: VisitorCallback<babel.ObjectExpression>;

  readonly enterProperty?: VisitorCallback<babel.Property>;
  readonly leaveProperty?: VisitorCallback<babel.Property>;

  readonly enterFunctionExpression?: VisitorCallback<babel.FunctionExpression>;
  readonly leaveFunctionExpression?: VisitorCallback<babel.FunctionExpression>;

  readonly enterArrowFunctionExpression?:
      VisitorCallback<babel.ArrowFunctionExpression>;
  readonly leaveArrowFunctionExpression?:
      VisitorCallback<babel.ArrowFunctionExpression>;

  readonly enterYieldExpression?: VisitorCallback<babel.YieldExpression>;
  readonly leaveYieldExpression?: VisitorCallback<babel.YieldExpression>;

  readonly enterSuper?: VisitorCallback<babel.Super>;
  readonly leaveSuper?: VisitorCallback<babel.Super>;

  readonly enterUnaryExpression?: VisitorCallback<babel.UnaryExpression>;
  readonly leaveUnaryExpression?: VisitorCallback<babel.UnaryExpression>;

  readonly enterUpdateExpression?: VisitorCallback<babel.UpdateExpression>;
  readonly leaveUpdateExpression?: VisitorCallback<babel.UpdateExpression>;

  readonly enterBinaryExpression?: VisitorCallback<babel.BinaryExpression>;
  readonly leaveBinaryExpression?: VisitorCallback<babel.BinaryExpression>;

  readonly enterAssignmentExpression?:
      VisitorCallback<babel.AssignmentExpression>;
  readonly leaveAssignmentExpression?:
      VisitorCallback<babel.AssignmentExpression>;

  readonly enterLogicalExpression?: VisitorCallback<babel.LogicalExpression>;
  readonly leaveLogicalExpression?: VisitorCallback<babel.LogicalExpression>;

  readonly enterMemberExpression?: VisitorCallback<babel.MemberExpression>;
  readonly leaveMemberExpression?: VisitorCallback<babel.MemberExpression>;

  readonly enterConditionalExpression?:
      VisitorCallback<babel.ConditionalExpression>;
  readonly leaveConditionalExpression?:
      VisitorCallback<babel.ConditionalExpression>;

  readonly enterCallExpression?: VisitorCallback<babel.CallExpression>;
  readonly leaveCallExpression?: VisitorCallback<babel.CallExpression>;

  readonly enterNewExpression?: VisitorCallback<babel.NewExpression>;
  readonly leaveNewExpression?: VisitorCallback<babel.NewExpression>;

  readonly enterSequenceExpression?: VisitorCallback<babel.SequenceExpression>;
  readonly leaveSequenceExpression?: VisitorCallback<babel.SequenceExpression>;

  readonly enterTemplateLiteral?: VisitorCallback<babel.TemplateLiteral>;
  readonly leaveTemplateLiteral?: VisitorCallback<babel.TemplateLiteral>;

  readonly enterTaggedTemplateExpression?:
      VisitorCallback<babel.TaggedTemplateExpression>;
  readonly leaveTaggedTemplateExpression?:
      VisitorCallback<babel.TaggedTemplateExpression>;

  readonly enterTemplateElement?: VisitorCallback<babel.TemplateElement>;
  readonly leaveTemplateElement?: VisitorCallback<babel.TemplateElement>;

  readonly enterSpreadElement?: VisitorCallback<babel.SpreadElement>;
  readonly leaveSpreadElement?: VisitorCallback<babel.SpreadElement>;

  readonly enterPattern?: VisitorCallback<babel.Pattern>;
  readonly leavePattern?: VisitorCallback<babel.Pattern>;

  readonly enterAssignmentProperty?: VisitorCallback<babel.AssignmentProperty>;
  readonly leaveAssignmentProperty?: VisitorCallback<babel.AssignmentProperty>;

  readonly enterObjectPattern?: VisitorCallback<babel.ObjectPattern>;
  readonly leaveObjectPattern?: VisitorCallback<babel.ObjectPattern>;

  readonly enterObjectMethod?: VisitorCallback<babel.ObjectMethod>;
  readonly leaveObjectMethod?: VisitorCallback<babel.ObjectMethod>;

  readonly enterObjectProperty?: VisitorCallback<babel.ObjectProperty>;
  readonly leaveObjectProperty?: VisitorCallback<babel.ObjectProperty>;

  readonly enterArrayPattern?: VisitorCallback<babel.ArrayPattern>;
  readonly leaveArrayPattern?: VisitorCallback<babel.ArrayPattern>;

  readonly enterRestElement?: VisitorCallback<babel.RestElement>;
  readonly leaveRestElement?: VisitorCallback<babel.RestElement>;

  readonly enterAssignmentPattern?: VisitorCallback<babel.AssignmentPattern>;
  readonly leaveAssignmentPattern?: VisitorCallback<babel.AssignmentPattern>;

  readonly enterMethod?: VisitorCallback<babel.Method>;
  readonly leaveMethod?: VisitorCallback<babel.Method>;

  readonly enterClassMethod?: VisitorCallback<babel.ClassMethod>;
  readonly leaveClassMethod?: VisitorCallback<babel.ClassMethod>;

  readonly enterClassDeclaration?: VisitorCallback<babel.ClassDeclaration>;
  readonly leaveClassDeclaration?: VisitorCallback<babel.ClassDeclaration>;

  readonly enterClassExpression?: VisitorCallback<babel.ClassExpression>;
  readonly leaveClassExpression?: VisitorCallback<babel.ClassExpression>;

  readonly enterMetaProperty?: VisitorCallback<babel.MetaProperty>;
  readonly leaveMetaProperty?: VisitorCallback<babel.MetaProperty>;

  readonly enterModuleDeclaration?: VisitorCallback<babel.ModuleDeclaration>;
  readonly leaveModuleDeclaration?: VisitorCallback<babel.ModuleDeclaration>;

  readonly enterModuleSpecifier?: VisitorCallback<babel.ModuleSpecifier>;
  readonly leaveModuleSpecifier?: VisitorCallback<babel.ModuleSpecifier>;

  readonly enterImportDeclaration?: VisitorCallback<babel.ImportDeclaration>;
  readonly leaveImportDeclaration?: VisitorCallback<babel.ImportDeclaration>;

  readonly enterImportSpecifier?: VisitorCallback<babel.ImportSpecifier>;
  readonly leaveImportSpecifier?: VisitorCallback<babel.ImportSpecifier>;

  readonly enterImportDefaultSpecifier?:
      VisitorCallback<babel.ImportDefaultSpecifier>;
  readonly leaveImportDefaultSpecifier?:
      VisitorCallback<babel.ImportDefaultSpecifier>;

  readonly enterImportNamespaceSpecifier?:
      VisitorCallback<babel.ImportNamespaceSpecifier>;
  readonly leaveImportNamespaceSpecifier?:
      VisitorCallback<babel.ImportNamespaceSpecifier>;

  readonly enterExportNamedDeclaration?:
      VisitorCallback<babel.ExportNamedDeclaration>;
  readonly leaveExportNamedDeclaration?:
      VisitorCallback<babel.ExportNamedDeclaration>;

  readonly enterExportSpecifier?: VisitorCallback<babel.ExportSpecifier>;
  readonly leaveExportSpecifier?: VisitorCallback<babel.ExportSpecifier>;

  readonly enterExportDefaultDeclaration?:
      VisitorCallback<babel.ExportDefaultDeclaration>;
  readonly leaveExportDefaultDeclaration?:
      VisitorCallback<babel.ExportDefaultDeclaration>;

  readonly enterExportAllDeclaration?:
      VisitorCallback<babel.ExportAllDeclaration>;
  readonly leaveExportAllDeclaration?:
      VisitorCallback<babel.ExportAllDeclaration>;
}
