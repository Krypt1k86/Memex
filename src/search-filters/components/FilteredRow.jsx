import React, { PureComponent } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import styles from './FilteredRow.css'

class FilteredRow extends PureComponent {
    static propTypes = {
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
            PropTypes.element,
        ]).isRequired,
        focused: PropTypes.bool,
        handleClick: PropTypes.func.isRequired,
        isActive: PropTypes.bool.isRequired,
    }

    get mainClass() {
        return cx(styles.menuItem, {
            [styles.menuItemFocused]: this.props.focused,
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <div
                    className={this.mainClass}
                    onClick={this.props.handleClick}
                >
                    <div className={styles.listName} title={this.props.value}>
                        {this.props.value}
                    </div>
                    {this.props.isActive && (
                        <button className={cx(styles.tick, styles.button)} />
                    )}
                </div>
            </div>
        )
    }
}

export default FilteredRow
