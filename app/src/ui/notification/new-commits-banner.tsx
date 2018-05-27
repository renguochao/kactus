import * as React from 'react'
import { ButtonGroup } from '../lib/button-group'
import { Button } from '../lib/button'
import { Ref } from '../lib/ref'
import { Octicon, OcticonSymbol } from '../octicons'

interface INewCommitsBannerProps {
  readonly numCommits: number
  readonly ref: string
}

export class NewCommitsBanner extends React.Component<
  INewCommitsBannerProps,
  {}
> {
  public render() {
    return (
      <div className="notification-banner diverge-banner">
        <div className="notification-banner-content">
          <p>
            Your branch is <strong>{this.props.numCommits} commits</strong>{' '}
            behind <Ref>{this.props.ref}</Ref>
          </p>

          <a className="close" aria-label="Dismiss banner">
            <Octicon symbol={OcticonSymbol.x} />
          </a>
        </div>

        <ButtonGroup>
          <Button type="submit" onClick={this.noOp}>
            Compare
          </Button>

          <Button onClick={this.noOp}>Merge...</Button>
        </ButtonGroup>
      </div>
    )
  }

  private noOp = () => {}
}
